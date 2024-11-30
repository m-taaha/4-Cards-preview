const boxes = document.querySelectorAll(
  ".superviser, .team-builder, .karma, .calculator"
);

boxes.forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    const { offsetWidth: width, offsetHeight: height } = box;
    const { offsetX: x, offsetY: y } = e;
    const xRotation = (y / height - 0.5) * 20; // Controls tilt on X-axis
    const yRotation = (x / width - 0.5) * -20; // Controls tilt on Y-axis

    box.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
});
