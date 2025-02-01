
const colorConfig = {
  confirmButtonColor: 'var(--bs-success, #00b894)',
  cancelButtonColor: 'var(--bs-danger, #d63031)',
  background: 'var(--bs-page, #f5f6fa)',
  color: 'var(--vp-c-text, #333333)',
  success: 'var(--bs-success, #00b894)',
  error: 'var(--bs-danger, #d63031)',
  info: 'var(--bs-primary, #0984e3)',
  warning: 'var(--bs-warning, #fdcb6e)',
  default: 'var(--bs-page, #f5f6fa)',
}

export class Pop {
  static createDialog(content) {
    if (typeof document === 'undefined') return null

    const dialog = document.createElement('dialog')
    dialog.innerHTML = content
    dialog.style.background = colorConfig.background
    dialog.style.color = colorConfig.color
    dialog.classList.add('custom-dialog')
    document.body.appendChild(dialog)
    dialog.showModal()

    dialog.addEventListener('close', () => {
      dialog.remove()
    })

    return dialog
  }

  static success(title, message) {
    this.toast(title ?? 'Success!', message, 'check-bold', { color: 'success' });
  }

  static error(error, title, hint) {
    this.toast(
      title ?? 'Oh No!',
      error?.message
        ? `<div class="dialog-err-msg">${error.message}</div>`
        : 'Something went wrong',
      'alert-decagram',
      {
        footer: hint ?? 'Refresh the page and try again. If the issue persists, please let us know.',
        color: 'danger'
      }

    );
  }


  /**
   * 
   * @param {string} title 
   * @param {string} text 
   * @param {string} icon 
   * @param {*} options 
   * @returns {HTMLElement}
   */
  static toast(title = 'Toast is ready', text = '', icon = 'information', { footer = '', color = '', timer = 5000, classesToAdd = [] } = {}) {
    if (typeof document === 'undefined') return null
    if (color) color = 'bg-' + color
    const toast = document.createElement('div')
    toast.setAttribute('role', 'alert')
    toast.classList.add('custom-toast', 'border-0', 'text-' + color, 'toast', 'show', color || undefined)
    if (classesToAdd) classesToAdd.forEach(c => toast.classList.add(c))
    toast.setAttribute('style', '--bs-bg-opacity: .4;')

    if (title && text) {
      toast.innerHTML = `
      <div class="toast-header text-${color}" ${color ? `style="--bs-bg-opacity: .8;"` : ''}>
        <i class="mdi mdi-${icon} me-2"></i>
        <b>${title}</b>
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body" >
        <div>${text}</div>
        ${footer ? `<hr class="my-1"/><small class="text-body-secondary">${footer}</small>` : ''}
      </div>
    `
    } else {
      toast.setAttribute('style', '--bs-bg-opacity: 1;')
      toast.innerHTML = `
      <div class="toast-body d-flex">
        <span>
          <i class="mdi mdi-${icon} me-2"></i><span>${title}</span>
        </span>
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      `
    }

    const toastContainer = document.getElementById('pop-toast-container') ?? this.createToastContainer()
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove()
    }, timer);
    return toast
  }


  static async confirm(title = 'Are you sure?', text = '', confirmText = 'yes', cancelText = 'no') {
    return new Promise((resolve) => {
      const dialog = this.createDialog(`
        <div class="dialog-content">
          <h2>${title}</h2>
          <p>${text}</p>
          <div class="dialog-buttons">
            <button id="confirm-button" style="background: ${colorConfig.confirmButtonColor};"> ${confirmText} </button>
            <button id="cancel-button" style="background: ${colorConfig.cancelButtonColor};"> ${cancelText} </button>
          </div>
        </div>
      `);

      dialog.querySelector('#confirm-button').addEventListener('click', () => {
        resolve(true);
        dialog.close();
      });

      dialog.querySelector('#cancel-button').addEventListener('click', () => {
        resolve(false);
        dialog.close();
      });
    });
  }

  static createToastContainer() {
    const container = document.createElement('div')
    container.id = 'pop-toast-container'
    document.body.appendChild(container)
    return container
  }
}
