import MyLoader from "./loader.component";

const FullPageLoader = () => {

    return (
        <div
          style={{
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <MyLoader />
        </div>
    );
}

export default FullPageLoader;