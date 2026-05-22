# EmailJS Configuration Guide

I have integrated the **@emailjs/browser** functionality directly into your "Get in Touch" modal on the website. Now, instead of just opening their local email client, users can send you messages directly from the website!

To make this work, you need to create a free account on EmailJS and configure your credentials.

## Step 1: Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account.
2. Go to the **Email Services** tab.
3. Click **Add New Service**, select **Gmail** (or your preferred provider), and connect your `adityakartikey1259@gmail.com` account.
4. Note down the **Service ID** (it usually looks like `service_xxxxx`).

## Step 2: Create an Email Template
1. Go to the **Email Templates** tab.
2. Click **Create New Template**.
3. In the template settings, use the exact variable names we defined in your code to pull data from the form. 
   
   Here is the perfect template to use:
   
   **Subject:**
   `New message from {{user_name}} via Portfolio!`
   
   **Content:**
   ```
   You got a new message from your portfolio website!
   
   Name: {{user_name}}
   Email: {{user_email}}
   
   Message:
   {{message}}
   ```

4. Go to the **Settings** tab of this template, and note down the **Template ID** (it looks like `template_xxxxx`).

## Step 3: Get your Public Key
1. Go to the **Account** tab (top right corner).
2. Under "API Keys", copy your **Public Key** (it's a short string of characters).

## Step 4: Add them to your code!
Open `src/pages/Index.tsx`. Around line 245, look for this section:

```javascript
// TODO: Replace these with your actual EmailJS IDs (see emailjs_instructions.md)
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
```

Replace `"YOUR_SERVICE_ID"`, `"YOUR_TEMPLATE_ID"`, and `"YOUR_PUBLIC_KEY"` with the actual keys you got from the steps above.

Save the file, and your contact form is now fully functional and will send beautifully formatted emails directly to your inbox!
