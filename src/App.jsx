import Flipbook from "./components/Flipbook";

const images = [
  "/assets/Draught/Flipbook_page-0001.jpg",
  "/assets/Draught/Flipbook_page-0002.jpg",
  "/assets/Draught/Flipbook_page-0003.jpg",
  "/assets/Draught/Flipbook_page-0004.jpg",
  "/assets/Draught/Flipbook_page-0005.jpg",
  "/assets/Draught/Flipbook_page-0006.jpg",
  "/assets/Draught/Flipbook_page-0007.jpg",
  "/assets/Draught/Flipbook_page-0008.jpg",
  "/assets/Draught/Flipbook_page-0009.jpg",
  "/assets/Draught/Flipbook_page-0010.jpg",
  "/assets/Draught/Flipbook_page-0011.jpg",
  "/assets/Draught/Flipbook_page-0012.jpg",
  "/assets/Draught/Flipbook_page-0013.jpg",
  "/assets/Draught/Flipbook_page-0014.jpg",
  "/assets/Draught/Flipbook_page-0015.jpg",
];
const App = () => {
  return (
    <div className="">
      <Flipbook images={images} />
    </div>
  );
};
export default App;
