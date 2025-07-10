# Farouk Alsajee - Digital Resume

A modern, responsive digital resume built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel for easy sharing and updates.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Fast Loading**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and structured data
- **Easy to Update**: Simple component-based structure
- **Print Friendly**: Optimized for PDF generation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📁 Project Structure

```
digital-resume/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Contact information and title
│   ├── TechnicalSummary.tsx # Professional summary
│   ├── TechnicalSkills.tsx  # Skills categorization
│   ├── ProfessionalExperience.tsx # Work experience
│   ├── TechnicalProjects.tsx # Technical projects
│   ├── Education.tsx        # Education and certifications
│   └── AdditionalInfo.tsx   # Languages, interests, awards
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd digital-resume
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Updating Content

1. **Personal Information**: Edit `components/Header.tsx`
2. **Summary**: Modify `components/TechnicalSummary.tsx`
3. **Skills**: Update `components/TechnicalSkills.tsx`
4. **Experience**: Edit `components/ProfessionalExperience.tsx`
5. **Projects**: Modify `components/TechnicalProjects.tsx`
6. **Education**: Update `components/Education.tsx`
7. **Additional Info**: Edit `components/AdditionalInfo.tsx`

### Styling

- **Colors**: Update `tailwind.config.js` for custom color schemes
- **Typography**: Modify `app/globals.css` for font changes
- **Layout**: Adjust component classes for layout modifications

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Deployment

```bash
npm run build
npm start
```

## 📄 PDF Generation

To generate a PDF version:

1. Open the deployed site in your browser
2. Press `Cmd + P` (Print)
3. Select "Save as PDF"
4. Choose "Letter" size and "Minimum" margins

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture
- Responsive design principles

## 📱 Responsive Design

The resume is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

- **Clean Typography**: Inter font family
- **Professional Color Scheme**: Blue primary with gray accents
- **Card-based Layout**: Clean separation of content
- **Hover Effects**: Subtle interactions
- **Print Optimization**: Optimized for PDF generation

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **SEO**: Proper meta tags and structured data
- **Accessibility**: WCAG 2.1 compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: <faroukalsajee@gmail.com>
- **LinkedIn**: [Farouk Alsajee](https://www.linkedin.com/in/faroukalsajee/)
- **GitHub**: [faroukalsajee](https://github.com/faroukalsajee)

---

Built with ❤️ using Next.js and Tailwind CSS
