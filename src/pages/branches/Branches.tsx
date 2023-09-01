import { Tooltip } from 'react-tooltip'

const Branches = () => {
    return (
        <>
        <div className="App">
          <h1 data-tooltip-id="my-tooltip-1" style={{ backgroundColor: "#999" }}>
            Hello Tooltip Example
          </h1>
          <h2 data-tooltip-id="my-tooltip-2" style={{ backgroundColor: "#999" }}>
            This is a basic example on how to use ReactTooltip
          </h2>
        </div>
       
        <Tooltip
          id="my-tooltip-2"
          place="bottom"
          variant="info"
          content={
            <div>
              <h1>
                h1
              </h1>
              <h2>
                h2
              </h2>
              </div>
          }
        />
      </>
    );
};

export default Branches;