// ColorInput.js
const ColorPicker = ({ color, setColor, label }:any) => {
    return (
      <>
        <label className="block mb-1">{label}</label>
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
          className="w-20 h-10 border-2 border-gray-300 rounded"
        />
      </>
    );
  };
  
  export default ColorPicker;
  