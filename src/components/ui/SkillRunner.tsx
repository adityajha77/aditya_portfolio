import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Trophy, RotateCcw, Gamepad2 } from 'lucide-react';
import { Button } from './button';

const SKILLS = [
  'REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 
  'NODE.JS', 'MONGODB', 'RUST', 'C++', 
  'SOLANA', 'WEB3', 'DOCKER', 'MOBILE'
];

// Physics Constants
const GRAVITY = 0.6;
const JUMP_VELOCITY = -10;
const INITIAL_GAME_SPEED = 5;
const OBSTACLE_SPAWN_RATE = 100; // Frames between obstacles
const LETTER_SPAWN_RATE = 150; // Frames between letters

export const SkillRunner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  
  const [hasStarted, setHasStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [collectedSkills, setCollectedSkills] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  
  const [notification, setNotification] = useState<string | null>(null);

  const currentSkill = SKILLS[currentSkillIndex % SKILLS.length];
  const targetLetter = currentSkill[currentLetterIndex];

  // Game State Refs (avoid state updates in game loop for performance)
  const stateRef = useRef({
    dino: { y: 0, vy: 0, width: 25, height: 35, isJumping: false },
    obstacles: [] as { x: number, width: number, height: number }[],
    letters: [] as { x: number, y: number, char: string, width: number, height: number, active: boolean }[],
    frameCount: 0,
    currentSkillIndex: 0,
    currentLetterIndex: 0,
    score: 0,
    gameSpeed: INITIAL_GAME_SPEED,
  });

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 2500);
  };

  const jump = useCallback(() => {
    if (gameOver) return;
    if (!hasStarted) setHasStarted(true);
    
    if (!stateRef.current.dino.isJumping) {
      stateRef.current.dino.vy = JUMP_VELOCITY;
      stateRef.current.dino.isJumping = true;
    }
  }, [gameOver, hasStarted]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ([' ', 'ArrowUp', 'w', 'W'].includes(e.key)) {
        e.preventDefault();
        jump();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [jump, gameOver]);

  const startGame = () => {
    stateRef.current = {
      dino: { y: 0, vy: 0, width: 25, height: 35, isJumping: false },
      obstacles: [],
      letters: [],
      frameCount: 0,
      currentSkillIndex: 0,
      currentLetterIndex: 0,
      score: 0,
      gameSpeed: INITIAL_GAME_SPEED,
    };
    setCurrentSkillIndex(0);
    setCurrentLetterIndex(0);
    setCollectedSkills([]);
    setScore(0);
    setGameOver(false);
    setHasStarted(true);
    setNotification(null);
  };

  // The Game Loop
  useEffect(() => {
    if (!hasStarted || gameOver) {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const groundY = canvasHeight - 20;

    const update = () => {
      const state = stateRef.current;
      state.frameCount++;

      // Dino Physics
      state.dino.y += state.dino.vy;
      state.dino.vy += GRAVITY;

      if (state.dino.y > groundY - state.dino.height) {
        state.dino.y = groundY - state.dino.height;
        state.dino.vy = 0;
        state.dino.isJumping = false;
      }

      // Spawning logic
      if (state.frameCount % OBSTACLE_SPAWN_RATE === 0 && Math.random() > 0.3) {
        state.obstacles.push({ x: canvasWidth, width: 30, height: 40 + Math.random() * 20 });
      }

      const hasActiveLetter = state.letters.some(l => l.active);
      if (state.frameCount % LETTER_SPAWN_RATE === 0 && !hasActiveLetter) {
        // Spawn the target letter at jump height
        const activeSkill = SKILLS[state.currentSkillIndex % SKILLS.length];
        const activeLetter = activeSkill[state.currentLetterIndex];
        if (activeLetter) {
          state.letters.push({
            x: canvasWidth + 50,
            y: groundY - 80 - Math.random() * 40,
            char: activeLetter,
            width: 30,
            height: 30,
            active: true
          });
        }
      }

      // Update Obstacles & Letters
      for (let i = state.obstacles.length - 1; i >= 0; i--) {
        const obs = state.obstacles[i];
        obs.x -= state.gameSpeed;

        // Collision Check Obstacle
        if (
          obs.x < 50 + state.dino.width &&
          obs.x + obs.width > 50 &&
          state.dino.y + state.dino.height > groundY - obs.height
        ) {
          setGameOver(true);
          return; // Stop updating if dead
        }

        if (obs.x + obs.width < 0) state.obstacles.splice(i, 1);
      }

      for (let i = state.letters.length - 1; i >= 0; i--) {
        const letter = state.letters[i];
        letter.x -= state.gameSpeed;

        // Collision Check Letter
        if (
          letter.active &&
          letter.x < 50 + state.dino.width &&
          letter.x + letter.width > 50 &&
          state.dino.y < letter.y + letter.height &&
          state.dino.y + state.dino.height > letter.y
        ) {
          letter.active = false;
          
          // Eaten the target letter
          const activeSkill = SKILLS[state.currentSkillIndex % SKILLS.length];
          if (state.currentLetterIndex + 1 < activeSkill.length) {
            state.currentLetterIndex++;
            state.score += 50;
            setCurrentLetterIndex(state.currentLetterIndex);
            setScore(state.score);
          } else {
            // Mastered the skill
            state.score += 500;
            state.gameSpeed += 0.5; // Increase game speed after mastering a word!
            setCollectedSkills(prev => [...prev, activeSkill]);
            
            triggerNotification(`Mastered ${activeSkill}!`);
            
            state.currentSkillIndex++;
            state.currentLetterIndex = 0;
            setCurrentSkillIndex(state.currentSkillIndex);
            setCurrentLetterIndex(0);
            setScore(state.score);
          }
        }

        if (letter.x + letter.width < 0) {
          if (letter.active) {
            // Missed a letter!
            setGameOver(true);
            return;
          }
          state.letters.splice(i, 1);
        }
      }

      // Render
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw Ground
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, groundY, canvasWidth, 2);

      // Draw Character (Dino)
      ctx.fillStyle = '#ffffff'; // Primary color representation
      ctx.fillRect(50, state.dino.y, state.dino.width, state.dino.height);

      // Draw Obstacles
      ctx.fillStyle = '#ef4444'; // Red-ish for danger
      state.obstacles.forEach(obs => {
        ctx.fillRect(obs.x, groundY - obs.height, obs.width, obs.height);
      });

      // Draw Letters
      ctx.fillStyle = '#22c55e'; // Green for collectable
      ctx.font = 'bold 20px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      state.letters.forEach(letter => {
        if (letter.active) {
          ctx.beginPath();
          ctx.arc(letter.x + letter.width/2, letter.y + letter.height/2, letter.width/2, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.fillStyle = '#000000';
          ctx.fillText(letter.char, letter.x + letter.width/2, letter.y + letter.height/2);
          ctx.fillStyle = '#22c55e'; // reset
        }
      });

      requestRef.current = requestAnimationFrame(update);
    };

    requestRef.current = requestAnimationFrame(update);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [hasStarted, gameOver]);

  return (
    <div 
      className="flex flex-col items-center justify-center w-full h-full relative overflow-hidden select-none"
    >
      {/* Top Notification (Slides in from top without breaking layout) */}
      <div 
        className={`absolute top-0 left-0 w-full flex justify-center pt-2 transition-all duration-500 z-50 ${
          notification ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
          {notification}
        </div>
      </div>

      {/* Header Info */}
      <div className="w-full flex justify-between items-center mb-4 px-1">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 pointer-events-none">
          <div className="flex items-center gap-1.5">
            <Gamepad2 className="h-5 w-5 text-primary" />
            <h2 className="text-base font-bold">Skill Runner</h2>
          </div>
          {!gameOver && hasStarted && (
            <div className="sm:ml-3 flex items-center text-xs">
              <span className="text-muted-foreground mr-1.5 text-[10px] uppercase">Target:</span>
              <div className="flex gap-0.5">
                {currentSkill.split('').map((char, idx) => (
                  <span 
                    key={idx} 
                    className={`font-mono text-sm font-bold ${
                      idx < currentLetterIndex ? 'text-primary' : 
                      idx === currentLetterIndex ? 'text-green-500 animate-pulse underline' : 
                      'text-muted-foreground/30'
                    }`}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col items-end pointer-events-none">
          <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Score</span>
          <span className="text-lg font-bold text-primary leading-none">{score}</span>
        </div>
      </div>

      {/* Game Canvas Container */}
      <div 
        className="relative w-full max-w-[800px] aspect-[800/340] bg-background border border-border/50 rounded-xl overflow-hidden shadow-inner cursor-pointer touch-none"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('button')) return;
          jump();
        }}
      >
        <canvas 
          ref={canvasRef}
          width={800}
          height={340}
          className="w-full h-full block"
        />

        {/* Start Overlay */}
        {!hasStarted && !gameOver && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-3 text-center z-20 pointer-events-none">
            <Gamepad2 className="h-6 w-6 sm:h-10 sm:w-10 text-primary mb-1.5 sm:mb-3 hidden xs:block" />
            <h3 className="text-sm sm:text-xl font-bold mb-0.5 sm:mb-1">Ready to Run?</h3>
            <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-4 max-w-[280px]">Tap the screen, Space, or Up/W to jump.</p>
            <Button onClick={(e) => { e.stopPropagation(); startGame(); }} className="rounded-full px-5 sm:px-8 h-8 sm:h-10 text-xs sm:text-sm pointer-events-auto">
              Start Game
            </Button>
          </div>
        )}

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md flex flex-col items-center justify-center p-3 text-center animate-in fade-in zoom-in duration-300 z-20 pointer-events-none">
            <Trophy className="h-6 w-6 sm:h-10 sm:w-10 text-yellow-500 mb-1 sm:mb-3 hidden xs:block" />
            <h3 className="text-sm sm:text-2xl font-bold mb-0.5 sm:mb-1">Game Over</h3>
            <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-3">You mastered {collectedSkills.length} skills!</p>
            
            <div className="flex flex-wrap justify-center gap-1 mb-2 sm:mb-4 max-w-[280px]">
              {collectedSkills.slice(-4).map((s, i) => (
                <span key={i} className="text-[8px] sm:text-xs bg-primary/20 text-primary px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full font-bold">{s}</span>
              ))}
              {collectedSkills.length > 4 && <span className="text-[8px] sm:text-xs text-muted-foreground self-center">+{collectedSkills.length - 4}</span>}
            </div>

            <Button onClick={(e) => { e.stopPropagation(); startGame(); }} className="rounded-full gap-1.5 px-5 sm:px-6 h-8 sm:h-10 text-xs sm:text-sm pointer-events-auto">
              <RotateCcw className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Try Again
            </Button>
          </div>
        )}
      </div>

      {/* Instructions below the game area for clarity */}
      <p className="mt-3 text-[10px] text-muted-foreground text-center pointer-events-none">
        Tap canvas or press Space to jump over obstacles and collect green letters!
      </p>

    </div>
  );
};
