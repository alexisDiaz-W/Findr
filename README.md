This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Install Dependancies

Design Libraries:

npm install @cloudscape-design/components
npm install @cloudscape-design/global-styles

Forms:
npm install react-hook-form

npm install axios


## AWS DynamoDB Schema

Partition Key: PK (String)
Sort Key: SK (String)

Attributes:
    Type: String ("Company" or "User")
    CompanyName: String (for companies)
    FirstName: String (for users)
    LastName: String (for users)
    Password: String (for users)
    CompanyID: String (for users, to reference their employer)
    Address: String
    Email: String

Secondary Index:
    Global Secondary Index (GSI) for alternative query patterns:
    GSI1PK (GSI Partition Key): Email - Allows querying by email address.
    GSI1SK (GSI Sort Key): Type - Helps filter by entity type (user or company).

## AWS Lambda: Company Sign Up Information: "findr-testLambda"

Expected JSON:

{
  "companyID": "1234",
  "companyName": "Findr",
  "email": "findr@gmail.com",
  "address": "123 Street Kansas"
}

## AWS LAMBDA: User Sign Up Information: "Findr-CreateUser"

Expected JSON:

{
  "companyID": "1234",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "address": "456 Elm Street, Springfield",
  "password": "securePassword123"  // Note: Work on hashing...
}

