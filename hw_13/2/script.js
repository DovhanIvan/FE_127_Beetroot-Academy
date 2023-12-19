const resizableBlock = document.getElementById('resizableBlock');
  const resizableContent = document.getElementById('resizableContent');

  let isResizing = false;

  resizableBlock.addEventListener('mousedown', (e) => {
    if (e.target === resizableBlock) {
      isResizing = true;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', () => {
        isResizing = false;
        document.removeEventListener('mousemove', handleMouseMove);
      });
    }
  });

  function handleMouseMove(e) {
    if (isResizing) {
      const newWidth = e.clientX - resizableBlock.getBoundingClientRect().left;
      const newHeight = e.clientY - resizableBlock.getBoundingClientRect().top;
      resizableBlock.style.width = `${newWidth}px`;
      resizableBlock.style.height = `${newHeight}px`;
    }
  }