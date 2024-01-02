import React from "react";

function Footer({t}) {
  return (
    <footer className="py-3 px-6 h-14 flex items-center justify-between border-t border-gray-300 bg-gray-200 text-sm text-gray-500">
  <div className="flex-1">
    &copy; {`${t('footer.title')}`}<span>{` ${t('footer.description')} `}<a href="https://themewagon.github.io/mark/index.html" target="_blank" rel="noopener noreferrer" className="text-primary">ThemeWagon</a></span>
  </div>
  
</footer>

  );
}

export default Footer;
