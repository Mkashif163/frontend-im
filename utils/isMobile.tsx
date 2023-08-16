import { useState, useEffect } from "react";
// Hook
function useMobileSize() {
  const [mobileSize, setMobileSize] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        1199 > window.innerWidth ? setMobileSize(true) : setMobileSize(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });
  return mobileSize;
}
export default useMobileSize;
