import {toPng} from "html-to-image";

const handleShare = async () => {
  const element = document.getElementById("resultsImage");
  if (!element) return;

  console.log(element);

  try {
    const dataUrl = await toPng(element,  {
      cacheBust: true,
      filter: (node) => {
        // For example exclude animated SVG elements
        return node.tagName !== "animate";
      },
    });

    // Optional: Share using Web Share API (if supported)
    if (navigator.canShare && navigator.canShare({ files: [] })) {
      const blob = await fetch(dataUrl).then((res) => res.blob());
      const file = new File([blob], 'result.png', { type: blob.type });

      await navigator.share({
        files: [file],
        title: 'My Quiz Result',
        text: 'Check out my result!',
      });
    } else {
      // Fallback: open in new tab or download
      const link = document.createElement('a');
      link.download = 'result.png';
      link.href = dataUrl;
      link.click();
    }
  } catch (error) {
    console.error('Share failed:', error);
  }
};

export default handleShare;