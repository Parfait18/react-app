import { useEffect, useState, useRef } from "react";
export const useDocumentTitle = function useDocument(title) {
  const titleRef = useRef(document.title);
  useEffect(() => {
    const originalTitle = titleRef.current;
    return () => {
      document.title = originalTitle;
    };
  }, []);

  useEffect(() => {
    document.title = title ? title : titleRef.current;
  }, [title]);
};
