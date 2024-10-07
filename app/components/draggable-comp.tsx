import Draggable from "react-draggable";

export default function DraggableComponent() {
  return (
    <Draggable handle=".drag-handle" cancel="h1, p">
      <div
        className="hidden md:block w-[600px] h-[400px] bg-black p-5"
        // style={{
        //   width: "600px",
        //   height: "400px",
        //   backgroundColor: "#f0f0f0",
        //   padding: "20px",
        //   border: "1px solid #ccc",
        //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        // }}
      >
        {/* Draggable handle */}
        <div
          className="drag-handle"
          style={{
            cursor: "move",
            backgroundColor: "#ccc",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <h2>Drag Me Here!</h2>
        </div>

        {/* Non-draggable content */}
        <div style={{ padding: "10px" }}>
          <h1>
            Hi, I am Austin. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Corporis atque, voluptatem reiciendis, tempore asperiores
            voluptas neque fugit sint quaerat ex dolorum vel facere beatae
            velit, error suscipit veritatis nihil voluptatibus?
          </h1>
        </div>
      </div>
    </Draggable>
  );
}
