import React, { useState, useEffect, useCallback } from 'react';
import { Trophy, RotateCcw, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Gamepad2 } from 'lucide-react';
import { Button } from './button';

const GRID_WIDTH = 20;
const GRID_HEIGHT = 12;
const INITIAL_SNAKE = [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }];
const INITIAL_DIRECTION = { x: 1, y: 0 }; // Moving RIGHT
const SPEED = 130; // Slightly faster for a sleeker feel

const SKILLS = [
  'REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 
  'NODE.JS', 'MONGODB', 'RUST', 'C++', 
  'SOLANA', 'WEB3', 'DOCKER', 'MOBILE'
];

interface Point {
  x: number;
  y: number;
}

export const SnakeGame = () => {
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Point>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Point>({ x: 10, y: 5 });
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [collectedSkills, setCollectedSkills] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const currentSkill = SKILLS[currentSkillIndex % SKILLS.length];
  const targetLetter = currentSkill[currentLetterIndex];

  // Generate random food position not on snake
  const generateFood = useCallback((currentSnake: Point[]) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_WIDTH),
        y: Math.floor(Math.random() * GRID_HEIGHT),
      };
      const onSnake = currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
      if (!onSnake) break;
    }
    return newFood;
  }, []);

  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood(INITIAL_SNAKE));
    setCurrentSkillIndex(0);
    setCurrentLetterIndex(0);
    setCollectedSkills([]);
    setGameOver(false);
    setHasStarted(true);
    setIsPaused(false);
    setShowNotification(null);
  };

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (gameOver) return;
    
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
    }

    if (!hasStarted && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'].includes(e.key.toLowerCase())) {
      setHasStarted(true);
    }

    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        if (direction.y !== 1) setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        if (direction.y !== -1) setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        if (direction.x !== 1) setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        if (direction.x !== -1) setDirection({ x: 1, y: 0 });
        break;
      case ' ':
        setIsPaused(prev => !prev);
        break;
    }
  }, [direction, gameOver, hasStarted]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const handleDirection = (newDir: Point) => {
    if (gameOver) return;
    if (!hasStarted) setHasStarted(true);
    
    if (newDir.x !== 0 && direction.x === -newDir.x) return;
    if (newDir.y !== 0 && direction.y === -newDir.y) return;
    
    setDirection(newDir);
  };

  useEffect(() => {
    if (gameOver || isPaused || !hasStarted) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const head = prevSnake[0];
        const newHead = {
          x: head.x + direction.x,
          y: head.y + direction.y,
        };

        // Wall Collision
        if (
          newHead.x < 0 || 
          newHead.x >= GRID_WIDTH || 
          newHead.y < 0 || 
          newHead.y >= GRID_HEIGHT
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Self Collision
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Eat Food (Letter)
        if (newHead.x === food.x && newHead.y === food.y) {
          
          if (currentLetterIndex + 1 < currentSkill.length) {
            // Next letter
            setCurrentLetterIndex(prev => prev + 1);
            setFood(generateFood(newSnake));
          } else {
            // Completed skill word
            setCollectedSkills(prev => [...prev, currentSkill]);
            setCurrentSkillIndex(prev => prev + 1);
            setCurrentLetterIndex(0);
            setFood(generateFood(newSnake));
            
            setShowNotification(`Mastered ${currentSkill}!`);
            setTimeout(() => setShowNotification(null), 2000);
          }
        } else {
          newSnake.pop(); // Remove tail if no food eaten
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, SPEED);
    return () => clearInterval(gameInterval);
  }, [snake, direction, food, gameOver, isPaused, hasStarted, currentSkillIndex, currentLetterIndex, currentSkill, generateFood]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-4 md:p-8 bg-card rounded-3xl border border-border/50 shadow-xl relative overflow-hidden">
      
      {/* Header Info */}
      <div className="w-full flex justify-between items-center mb-6 px-2">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <Gamepad2 className="h-6 w-6 text-primary hidden md:block" />
          <h2 className="text-xl font-bold">Code Snake</h2>
          {!gameOver && hasStarted && (
            <div className="md:ml-4 flex items-center text-sm">
              <span className="text-muted-foreground mr-2">Target:</span>
              <div className="flex gap-1">
                {currentSkill.split('').map((char, idx) => (
                  <span 
                    key={idx} 
                    className={`font-mono text-lg font-bold ${
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
        <div className="flex flex-col items-end">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Score</span>
          <span className="text-2xl font-bold text-primary">{collectedSkills.length * 500 + currentLetterIndex * 50}</span>
        </div>
      </div>

      {/* Game Board container */}
      <div className="relative bg-background border-2 border-border/50 rounded-xl overflow-hidden shadow-inner touch-none w-full max-w-[800px] aspect-[20/12]">
        
        {/* The Grid */}
        <div 
          className="grid gap-[1px] bg-border/20 w-full h-full"
          style={{ 
            gridTemplateColumns: `repeat(${GRID_WIDTH}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${GRID_HEIGHT}, minmax(0, 1fr))`
          }}
        >
          {Array.from({ length: GRID_WIDTH * GRID_HEIGHT }).map((_, i) => {
            const x = i % GRID_WIDTH;
            const y = Math.floor(i / GRID_WIDTH);
            const isSnakeHead = snake[0].x === x && snake[0].y === y;
            const isSnakeBody = snake.some((segment, index) => index !== 0 && segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;

            return (
              <div 
                key={i} 
                className={`
                  w-full h-full rounded-[2px] flex items-center justify-center
                  ${isSnakeHead ? 'bg-primary' : ''}
                  ${isSnakeBody ? 'bg-primary/80' : ''}
                  ${isFood ? 'bg-green-500 rounded-sm' : ''}
                  ${!isSnakeHead && !isSnakeBody && !isFood ? 'bg-muted/10' : ''}
                `}
              >
                {/* Food Letter */}
                {isFood && (
                  <span className="text-[10px] md:text-sm font-bold text-background select-none leading-none">
                    {targetLetter}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Overlays */}
        {!hasStarted && !gameOver && (
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-20">
            <Gamepad2 className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Master Your Stack</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-8 text-left bg-card p-4 rounded-xl border border-border/50">
              <div>
                <p className="font-bold text-foreground mb-1">💻 On Laptop:</p>
                <p className="text-sm text-muted-foreground">Use <kbd className="bg-muted px-1 py-0.5 rounded">Arrow Keys</kbd> or <kbd className="bg-muted px-1 py-0.5 rounded">W A S D</kbd> to move.</p>
              </div>
              <div className="hidden md:block w-px bg-border" />
              <div>
                <p className="font-bold text-foreground mb-1">📱 On Phone:</p>
                <p className="text-sm text-muted-foreground">Use the large arrow buttons below the screen to steer.</p>
              </div>
            </div>

            <Button onClick={startGame} className="rounded-full px-8 h-12 text-lg animate-pulse">Start Game</Button>
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-300 z-20">
            <Trophy className="h-16 w-16 text-yellow-500 mb-4" />
            <h3 className="text-3xl font-bold mb-1">Game Over</h3>
            <p className="text-muted-foreground mb-4">You mastered {collectedSkills.length} full skills!</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-[400px]">
              {collectedSkills.slice(-8).map((s, i) => (
                <span key={i} className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full font-bold">{s}</span>
              ))}
              {collectedSkills.length > 8 && <span className="text-sm text-muted-foreground self-center">+{collectedSkills.length - 8} more</span>}
            </div>

            <Button onClick={startGame} className="rounded-full gap-2 px-8 h-12">
              <RotateCcw className="h-4 w-4" /> Try Again
            </Button>
          </div>
        )}

        {/* Notification Toast over board */}
        {showNotification && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-xl shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-in fade-in zoom-in duration-200 z-50 whitespace-nowrap">
            {showNotification}
          </div>
        )}
      </div>

      {/* Mobile Controls (Only visible on small screens) */}
      <div className="mt-8 grid grid-cols-3 gap-2 md:hidden w-full max-w-[250px] mx-auto">
        <div />
        <Button variant="outline" size="icon" className="h-16 w-16 rounded-2xl active:bg-primary/20 border-2" onClick={() => handleDirection({x: 0, y: -1})}>
          <ChevronUp className="h-10 w-10" />
        </Button>
        <div />
        <Button variant="outline" size="icon" className="h-16 w-16 rounded-2xl active:bg-primary/20 border-2" onClick={() => handleDirection({x: -1, y: 0})}>
          <ChevronLeft className="h-10 w-10" />
        </Button>
        <Button variant="outline" size="icon" className="h-16 w-16 rounded-2xl active:bg-primary/20 border-2" onClick={() => handleDirection({x: 0, y: 1})}>
          <ChevronDown className="h-10 w-10" />
        </Button>
        <Button variant="outline" size="icon" className="h-16 w-16 rounded-2xl active:bg-primary/20 border-2" onClick={() => handleDirection({x: 1, y: 0})}>
          <ChevronRight className="h-10 w-10" />
        </Button>
      </div>

    </div>
  );
};
