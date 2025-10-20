import { useEffect, useRef, useState } from "react";

export default function SignaturePad({ width = 300, height = 300 }) {
  const canvasRef: any = useRef(null);
  const isDrawingRef = useRef(false);
  const [hasSignature, setHasSignature] = useState(false); // Track if something is drawn

  const startDrawing = (e: any) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    let clientX, clientY;
    if (e.type.includes("mouse")) {
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    }

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
    isDrawingRef.current = true;
  };

  const draw = (e: any) => {
    if (!isDrawingRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    let clientX, clientY;
    if (e.type.includes("mouse")) {
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    }

    const ctx = canvas.getContext("2d");
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();

    setHasSignature(true); // Mark canvas as having a signature
  };

  const stopDrawing = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.closePath();
    isDrawingRef.current = false;
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.font = "18px Qomra";
      ctx.fillStyle = "#9694ff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("", canvas.width / 2, canvas.height / 2);

      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#000";
    }
  }, []);

  const downloadSignature = () => {
    if (!hasSignature) return; // Prevent download if empty

    const canvas = canvasRef.current;
    canvas.toBlob((blob: Blob | null) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "التوقيع.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, "image/png");
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false); // Reset state
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="rounded-lg border border-gray-300 overflow-hidden shadow-md"
        style={{ width, height }}
      >
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-full touch-none"
        />
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        {/* زر تحميل التوقيع */}
        <button
          onClick={downloadSignature}
          disabled={!hasSignature}
          className={`${
            hasSignature
              ? "bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white shadow-lg"
              : "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
          } font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
        >
          تحميل التوقيع
        </button>

        {/* زر مسح التوقيع */}
        <button
          onClick={clearSignature}
          disabled={!hasSignature}
          className={`${
            hasSignature
              ? "bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 shadow-sm"
              : "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed shadow-none"
          } font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
        >
          مسح التوقيع
        </button>
      </div>
    </div>
  );
}
