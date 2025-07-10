<<<<<<< HEAD
// Create animated particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Show notification
        function showNotification(message) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Interactive button functions
        function joinTeam() {
            showNotification('Formulário de inscrição enviado! Bem-vindo ao time!');
            // Add sparkle effect
            createSparkles();
        }

        function showDiscord() {
            showNotification('Redirecionando para o Discord do Bateteias...');
            // In a real scenario, this would open Discord
        }


        function showEvents() {
            showNotification('Carregando próximos eventos...');
        }


        // Stats animation
        function animateStats(card) {
            const number = card.querySelector('.stat-number');
            const originalTransform = card.style.transform;
            
            card.style.transform = 'scale(1.1) rotate(5deg)';
            number.style.color = '#ff6b6b';
            
            setTimeout(() => {
                card.style.transform = originalTransform;
                number.style.color = '#ffd700';
            }, 300);
            
            showNotification('Estatística atualizada!');
        }

        // Create sparkles effect
        function createSparkles() {
            for (let i = 0; i < 20; i++) {
                const sparkle = document.createElement('div');
                sparkle.style.position = 'fixed';
                sparkle.style.width = '4px';
                sparkle.style.height = '4px';
                sparkle.style.background = '#ffd700';
                sparkle.style.borderRadius = '50%';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.left = Math.random() * window.innerWidth + 'px';
                sparkle.style.top = Math.random() * window.innerHeight + 'px';
                sparkle.style.animation = 'sparkle 2s ease-out forwards';
                sparkle.style.zIndex = '1000';
                
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 2000);
            }
        }

        // Calendar animation
        function animateCalendar() {
            const main = document.querySelector('main');
            main.style.animation = 'shake 0.5s';
            
            setTimeout(() => {
                main.style.animation = '';
            }, 500);
        }

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes sparkle {
                0% { opacity: 1; transform: scale(0) rotate(0deg); }
                50% { opacity: 1; transform: scale(1) rotate(180deg); }
                100% { opacity: 0; transform: scale(0) rotate(360deg); }
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(style);

        // Smooth scrolling for links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialize particles when page loads
        document.addEventListener('DOMContentLoaded', createParticles);

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.transform = 'translateY(-10px)';
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.transform = 'translateY(0)';
                header.style.boxShadow = 'none';
            }
        });

        // Add hover effect to buttons
        document.querySelectorAll('.interactive-btn').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
=======
// Create animated particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Show notification
        function showNotification(message) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Interactive button functions
        function joinTeam() {
            showNotification('Formulário de inscrição enviado! Bem-vindo ao time!');
            // Add sparkle effect
            createSparkles();
        }

        function showDiscord() {
            showNotification('Redirecionando para o Discord do Bateteias...');
            // In a real scenario, this would open Discord
        }


        function showRules() {
            showNotification('Exibindo regras do time...');
        }

        function showEvents() {
            showNotification('Carregando próximos eventos...');
        }

        function contactUs() {
            showNotification('Abrindo formulário de contato...');
        }

        // Stats animation
        function animateStats(card) {
            const number = card.querySelector('.stat-number');
            const originalTransform = card.style.transform;
            
            card.style.transform = 'scale(1.1) rotate(5deg)';
            number.style.color = '#ff6b6b';
            
            setTimeout(() => {
                card.style.transform = originalTransform;
                number.style.color = '#ffd700';
            }, 300);
            
            showNotification('Estatística atualizada!');
        }

        // Create sparkles effect
        function createSparkles() {
            for (let i = 0; i < 20; i++) {
                const sparkle = document.createElement('div');
                sparkle.style.position = 'fixed';
                sparkle.style.width = '4px';
                sparkle.style.height = '4px';
                sparkle.style.background = '#ffd700';
                sparkle.style.borderRadius = '50%';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.left = Math.random() * window.innerWidth + 'px';
                sparkle.style.top = Math.random() * window.innerHeight + 'px';
                sparkle.style.animation = 'sparkle 2s ease-out forwards';
                sparkle.style.zIndex = '1000';
                
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 2000);
            }
        }

        // Calendar animation
        function animateCalendar() {
            const main = document.querySelector('main');
            main.style.animation = 'shake 0.5s';
            
            setTimeout(() => {
                main.style.animation = '';
            }, 500);
        }

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes sparkle {
                0% { opacity: 1; transform: scale(0) rotate(0deg); }
                50% { opacity: 1; transform: scale(1) rotate(180deg); }
                100% { opacity: 0; transform: scale(0) rotate(360deg); }
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(style);

        // Smooth scrolling for links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialize particles when page loads
        document.addEventListener('DOMContentLoaded', createParticles);

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.transform = 'translateY(-10px)';
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.transform = 'translateY(0)';
                header.style.boxShadow = 'none';
            }
        });

        // Add hover effect to buttons
        document.querySelectorAll('.interactive-btn').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
>>>>>>> cc06a66551b95586e2a773a92540669e1e964559
        });