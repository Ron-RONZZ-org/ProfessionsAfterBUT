# Copilot Instructions for ProfessionsAfterBUT

## Project Context

This project is a web-based poster ("affiche") showcasing career possibilities after completing a BUT (Bachelor Universitaire de Technologie) in Génie Industriel et Maintenance. The goal is to inform students about professional opportunities in this field.

## Project Requirements

### Deliverables
- A3 summary poster (printable) with QR code linking to the complete online version
- Complete online poster for web consultation
- Zero grammatical errors - perfect French orthography is mandatory

### Technical Stack
- **HTML**: Semantic markup for content structure
- **CSS**: Styling for both print (A3) and web versions
- **JavaScript**: Interactive features for the online version only

## Content Requirements

The poster must include:
- **Qualities and skills required** for the profession
- **Personal experience**:
  - A typical day
  - Feelings and impressions
  - Strengths and weaknesses
  - Likes and dislikes (workload, activity nature)
- **Remuneration** information (research-based, with French context)
- **Career evolution** possibilities (e.g., university professor, scientific mediator, R&D engineer)

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Ensure accessibility (ARIA labels where appropriate)
- Support print media queries for A3 format
- Include proper meta tags for French language content

### CSS
- Use mobile-first responsive design
- Separate print styles with `@media print`
- Maintain clean, readable code with comments
- Consider A3 paper dimensions (297mm x 420mm) for print layout

### JavaScript
- Use vanilla JavaScript or minimal dependencies
- Ensure progressive enhancement (site works without JS)
- Add interactive elements only for web version
- Comment complex logic clearly

## Language and Content

- **Primary language**: French
- **Grammar**: Zero tolerance for errors - always verify French spelling and grammar
- **Tone**: Professional but accessible to students
- **Formatting**: Clear hierarchy and visual structure

## Development Practices

- Test print layout before finalizing
- Validate QR code functionality
- Ensure cross-browser compatibility
- Check responsive design on multiple devices
- Verify all external links and references

## File Organization

Suggested structure:
- `/index.html` - Main web poster
- `/print.html` or print styles in main file - A3 printable version
- `/css/` - Stylesheets
- `/js/` - JavaScript files
- `/assets/` - Images, QR codes, other media

## When Assisting

- Always write or verify content in proper French
- Consider both web and print contexts when suggesting changes
- Prioritize clarity and visual hierarchy
- Suggest improvements to user experience
- Flag any potential grammar or spelling issues
