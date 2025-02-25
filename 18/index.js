const testimonial = [
  {
    name: "Emily Johnson",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Apple laptops are top-notch in terms of design, performance, and reliability. I am beyond impressed with the sleek design and fast processing speed of their products. I highly recommend Apple for anyone in need of a high-quality laptop.",
  },
  {
    name: "Sarah Johnson",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Apple's laptops are unparalleled in design and performance. I have never experienced such seamless productivity before. The sleek design combined with powerful features make it a must-have for anyone looking for efficiency and style.",
  },
  {
    name: "Mark Twinon",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I am thoroughly impressed with Apple's sleek and powerful laptops. The seamless performance and stunning design truly set them apart from the rest. As a professional, I rely on my Apple laptop every day, and it never disappoints. Highly recommend for anyone seeking top-notch quality and reliability.",
  },
  {
    name: "Max Stiller",
    photoUrl:
      "https://images.unsplash.com/photo-1593601679471-bd6dc74c0d7c?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Apple's laptops are simply amazing! The sleek design and top-notch performance make them a must-have for anyone in need of a reliable computer. I've been a loyal Apple customer for years and I can't imagine using any other brand.",
  },
];

const img = document.querySelector(".img");
const text = document.querySelector(".text");
const username = document.querySelector(".username");

let index = 0;

function updateTestimonial() {
  const { name, photoUrl, text } = testimonial[index];
  img.src = photoUrl;
  text.innerText = text;
  username.innerText = name;
  index++;
  if (index === testimonial.length) {
    index = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
updateTestimonial();
