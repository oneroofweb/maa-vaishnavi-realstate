      
/*
=========================================
            Home Page Counter Effect
=========================================
*/
      document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll(".counter");
        const speed = 150;

        const animateCounters = () => {
          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(animateCounters, 20);
            } else {
              counter.innerText = target;
            }
          });
        };

        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 },
        );

        counters.forEach((counter) => {
          observer.observe(counter);
        });
      });
        
/*
=========================================
            Gallery Ligtbox Effect
=========================================
*/
        
        document.addEventListener('DOMContentLoaded', () => {
            // Select all gallery items
            const galleryItems = document.querySelectorAll('.gallery-item');
            const lightboxImage = document.getElementById('lightboxImage');

            // Add click event to each gallery item
            galleryItems.forEach(item => {
                item.addEventListener('click', function() {
                    // Find the image inside the clicked item
                    const imgElement = this.querySelector('img');
                    // Update the src of the modal image
                    if (imgElement) {
                        lightboxImage.src = imgElement.src;
                    }
                });
            });
        });
