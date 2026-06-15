import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ScrollDots = () => {
  const location = useLocation();
  const sections = ["hero", "projects", "skills", "recomendation", "contact"];

  // 1. Hide the scroll dots completely if the user is NOT on the home page
  if (location.pathname !== "/") {
    return null;
  }

  return (
    // Note: Fixed a minor Tailwind typo in your original class: "transform -translate-y-1/2"
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
      {sections.map((section) => (
        // 2. Swapped standard <a> for <HashLink> to make cross-page targeting safe
        <HashLink
          smooth
          key={section}
          to={`/#${section}`}
          className="w-3 h-3 rounded-full transition bg-gray-400 hover:bg-blue-500 aria-label={`Scroll to ${section}`}"
        />
      ))}
    </div>
  );
};

export default ScrollDots;