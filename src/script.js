// Referencias DOM
const form = document.getElementById('miFormulario');
const inputs = {
    email: document.getElementById('email'),
    pass: document.getElementById('password'),
    usuario: document.getElementById('usuario'),
    nombre: document.getElementById('nombre')
};
const errors = {
    email: document.getElementById('errorEmail'),
    pass: document.getElementById('errorPass'),
    usuario: document.getElementById('errorUsuario'),
    nombre: document.getElementById('errorNombre')
};
const btnSubmit = document.getElementById('btnControlTotal');
const btnLimpiar = document.getElementById('btnLimpiar');
const checklist = document.getElementById('password-checklist');
const globalMsg = document.getElementById('mensajesGlobales');

// Estado de validación
let validationState = {
    email: false,
    pass: false,
    usuario: false,
    nombre: false
};

// Regex
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// --- Lógica de Validación (Mantenida) ---
function validateField(field, isValid, msg = "") {
    const wrapper = inputs[field].parentElement;
    const errorSpan = errors[field];

    if (isValid) {
        wrapper.classList.remove('invalid');
        wrapper.classList.add('valid');
        errorSpan.textContent = "";
        validationState[field] = true;
    } else {
        wrapper.classList.remove('valid');
        if (inputs[field].value.length > 0) {
            wrapper.classList.add('invalid');
            errorSpan.textContent = msg;
        } else {
            wrapper.classList.remove('invalid');
            errorSpan.textContent = "";
        }
        validationState[field] = false;
    }
    checkFormValidity();
}

inputs.email.addEventListener('input', () => {
    const val = inputs.email.value.trim();
    validateField('email', regexEmail.test(val), "Email inválido");
});

inputs.usuario.addEventListener('input', () => {
    const val = inputs.usuario.value.trim();
    validateField('usuario', val.length >= 3, "Mínimo 3 caracteres");
});

inputs.nombre.addEventListener('input', () => {
    const val = inputs.nombre.value.trim();
    validateField('nombre', val.length > 0, "Campo obligatorio");
});

inputs.pass.addEventListener('focus', () => {
    checklist.classList.add('visible');
});

inputs.pass.addEventListener('blur', () => {
    checklist.classList.remove('visible');
});

inputs.pass.addEventListener('input', () => {
    const val = inputs.pass.value;
    const cLen = val.length >= 5;
    const cUpper = /[A-Z]/.test(val);
    const cLower = /[a-z]/.test(val);
    const cNum = /[0-9]/.test(val);

    updateCheckItem('check-len', cLen);
    updateCheckItem('check-upper', cUpper);
    updateCheckItem('check-lower', cLower);
    updateCheckItem('check-num', cNum);

    const isValid = cLen && cUpper && cLower && cNum;
    validateField('pass', isValid, "");
});

function updateCheckItem(id, valid) {
    const item = document.getElementById(id);
    if (valid) {
        item.classList.add('valid');
        item.classList.remove('invalid');
    } else {
        item.classList.remove('valid');
    }
}

function checkFormValidity() {
    const allValid = Object.values(validationState).every(v => v === true);
    btnSubmit.disabled = !allValid;
}

btnSubmit.addEventListener('click', () => {
    if (btnSubmit.disabled) return;
    btnSubmit.classList.add('loading');
    setTimeout(() => {
        btnSubmit.classList.remove('loading');
        globalMsg.innerHTML = "<h3>¡Solicitud enviada correctamente!</h3>";
        globalMsg.className = "global-messages success";
    }, 1500);
});

btnLimpiar.addEventListener('click', resetForm);

function resetForm() {
    form.reset();
    Object.keys(inputs).forEach(key => {
        const wrapper = inputs[key].parentElement;
        wrapper.classList.remove('valid', 'invalid');
        errors[key].textContent = "";
        validationState[key] = false;
    });
    document.querySelectorAll('.check-item').forEach(item => item.classList.remove('valid'));
    checklist.classList.remove('visible');
    globalMsg.textContent = "";
    checkFormValidity();
}


// --- FONDO: Triangulación "Cyber-Mesh" Mejorada ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

const config = {
    count: 55,
    connDist: 170,
    mouseDist: 250, // Radio de interacción más amplio
    baseColor: { r: 79, g: 115, b: 208 } // Azul del tema (#4F73D0)
};

const mouse = { x: null, y: null };

window.addEventListener('mousemove', e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('resize', resize);

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2 + 1;
        // Variación de color individual
        this.alpha = Math.random() * 0.5 + 0.1;
        this.pulseDir = 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Rebote
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Efecto "Respiración" (Pulsing)
        this.alpha += 0.005 * this.pulseDir;
        if (this.alpha > 0.6 || this.alpha < 0.1) this.pulseDir *= -1;

        // Interacción Mouse (Repulsión Magnética Suave)
        if (mouse.x != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < config.mouseDist) {
                const force = (config.mouseDist - distance) / config.mouseDist;
                const dxForce = (dx / distance) * force * 2;
                const dyForce = (dy / distance) * force * 2;
                this.x -= dxForce;
                this.y -= dyForce;
            }
        }
    }
}

function initParticles() {
    resize();
    particles = [];
    for (let i = 0; i < config.count; i++) particles.push(new Particle());
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);

    // Actualizar
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
    }

    // Dibujar Triángulos
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < config.connDist) {
                for (let k = j + 1; k < particles.length; k++) {
                    const dx2 = particles[j].x - particles[k].x;
                    const dy2 = particles[j].y - particles[k].y;
                    const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                    const dx3 = particles[i].x - particles[k].x;
                    const dy3 = particles[i].y - particles[k].y;
                    const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);

                    if (dist2 < config.connDist && dist3 < config.connDist) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.lineTo(particles[k].x, particles[k].y);
                        ctx.closePath();

                        // Color dinámico basado en el azul del tema
                        // Más opaco si está cerca del ratón
                        let alpha = 0.03;
                        if (mouse.x != null) {
                            // Centro del triángulo
                            const cx = (particles[i].x + particles[j].x + particles[k].x) / 3;
                            const cy = (particles[i].y + particles[j].y + particles[k].y) / 3;
                            const dMouse = Math.sqrt((cx - mouse.x) ** 2 + (cy - mouse.y) ** 2);
                            if (dMouse < config.mouseDist) {
                                alpha = 0.08 * (1 - dMouse / config.mouseDist);
                            }
                        }

                        ctx.fillStyle = `rgba(${config.baseColor.r}, ${config.baseColor.g}, ${config.baseColor.b}, ${alpha})`;
                        ctx.fill();

                        ctx.strokeStyle = `rgba(${config.baseColor.r}, ${config.baseColor.g}, ${config.baseColor.b}, ${alpha * 2})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        }
    }

    // Dibujar Puntos Brillantes
    for (let i = 0; i < particles.length; i++) {
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
        // Puntos blancos brillantes con el alpha pulsante
        ctx.fillStyle = `rgba(255, 255, 255, ${particles[i].alpha})`;
        ctx.fill();
    }
}

initParticles();
