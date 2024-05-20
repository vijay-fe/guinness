import BreadCrumb from "../components/BreadCrumb";

export default  function  Layout({ children }) {
  return (
    <>
      <div className="w-full py-4">
        <BreadCrumb />
      </div>
      {children}
    </>
  );
}