# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Creating email response template
Step 1: Create an EmailJS Account

Step 2: Connect Your Email Service
Click Email Services.
Click Add New Service.
Choose:
Gmail
Outlook
Custom SMTP
Zoho, etc.

For Gmail:

Select Gmail.
Authorize your Google account.
EmailJS will create a Service ID such as: service_abc123
Save this value.

Step 3: Create an Email Template
Click Email Templates.
Click Create New Template.

You'll get an editor with fields such as:

**subject**
New Portfolio Contact Form Submission

**Email Body**
<h2>New Contact Form Submission</h2>

<p><strong>Name:</strong> {{from_name}}</p>

<p><strong>Email:</strong> {{from_email}}</p>

<p><strong>Message:</strong></p>

<p>{{message}}</p>

temp 3:body
<h2>Portfolio Contact Request</h2>

<p><strong>Name:</strong> {{from_name}}</p>

<p><strong>Email:</strong> {{from_email}}</p>

<p><strong>Message:</strong></p>

<p>{{message}}</p>

<hr>

<p>This message was sent from your portfolio website.</p>

Step 4: Save the Template

After saving you'll see a Template ID such as:  template_xyz789
Save this value.

Step 5: Get Your Public Key

Navigate to:

Account → General

You'll find:A1B2C3D4E5
Save it.

Step 6: Add to Your .env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=A1B2C3D4E5

Step 7: Match Template Variables

Your React code sends:
{
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message,
}

So your EmailJS template must use exactly:
{{from_name}}
{{from_email}}
{{message}}

The names are case-sensitive.

## TODOList 
create an auto-reply template, so when someone fills out your portfolio form they immediately receive a professional acknowledgment email while you receive the original message.

2. Create an about page with routing
