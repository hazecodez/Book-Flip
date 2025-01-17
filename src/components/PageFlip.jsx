import "./flip.css";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const pdf = "/assets/test.pdf";
const Pages = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

// PropTypes and DisplayName for Pages
Pages.propTypes = {
  children: PropTypes.node.isRequired,
  number: PropTypes.number.isRequired,
};
Pages.displayName = "Pages";

export default function PageFlip() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Load the Document once */}
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        {numPages && (
          <HTMLFlipBook width={350} height={500} showCover={true}>
            {/* Render pages dynamically */}
            {[...Array(numPages).keys()].map((n) => (
              <Pages key={n} number={n + 1}>
                <Page
                  pageNumber={n + 1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={350}
                  className="border border-black"
                />
              </Pages>
            ))}
          </HTMLFlipBook>
        )}
      </Document>
    </div>
  );
}
