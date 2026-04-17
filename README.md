# Sales Dashboard - React Application

A modern sales dashboard application built with React, Tailwind CSS, react-simple-maps and Recharts.

## Features Implemented

### Dashboard Features
- **Statistics Cards** - 4 cards showing Total Sales, Total Orders, Product Sold, and New Customers with percentage changes
- **Visitor Insights** - Line chart showing Loyal, New, and Unique customers trend over 12 months
- **Total Revenue** - Bar chart comparing Online vs Offline sales from Monday to Sunday
- **Customer Satisfaction** - Line chart comparing current month vs last month performance
- **Target vs Reality** - Bar chart comparing Reality Sales vs Target Sales
- **Top Products** - Table with product popularity and sales percentages
- **Sales Map** - Country-wise sales distribution with volume and services metrics
- **Volume vs Service Level**

### Data Table Features
- **API Integration** - Fetches user data from JSONPlaceholder API
- **Search** - Real-time search by name or email
- **Sorting** - Sort by Name, Email, Company Name, or City (A-Z and Z-A)
- **Filter** - Filter customers by city from dropdown
- **Loading States** - Shows loading spinner while fetching data
- **Error Handling** - Displays error message with retry option
- **Responsive Table** - Horizontal scroll on mobile devices

### UI/UX Features
- **Sidebar Navigation** - Collapsible sidebar with menu items (Dashboard, Leaderboard, Orders, Products, Sales Report, Messages, Settings)
- **Header** - Search bar, language selector, notifications, and user profile dropdown
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Modern Charts** - Interactive charts using Recharts library
- **Custom Icons** - Heroicons and React Icons for consistent design

### Assumptions & Decisions
- **Chart Data** - Sample data was created to match the Figma design patterns since no real data was provided
- **Icons** - Used external icon libraries (Heroicons and React Icons) for consistency and scalability
- **Logo Icon** - Could not extract the exact logo icon image from the Figma design, so placed a random icon (fire icon) as a placeholder
- **User Avatar** - Used placeholder avatar image since no specific user photo was provided in the design

## Project Setup Steps

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Anaswara-Rajesh/sales-dashboard.git
cd sales-dashboard/dashboard

2. **Install Dependencies**

npm install

3. **Install Additional required packages**

npm install axios recharts @heroicons/react react-icons
npm install react-simple-maps --force

4. **Start the development server**

npm start

5. **Open your browser**

http://localhost:3000

