import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// Create an instance
const MySwal = withReactContent(Swal);

//Create an object with the methods required for alerts
const Alerts = {
  showConfirmationDialog: async () => {
    return MySwal.fire({
      title: '¿Estás seguro que deseas eliminar?',
      text: 'Esta acción no se puede revertir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      return result.isConfirmed;
    });
  },

  showSuccessMessage: (message = "Éxito") => {
    return MySwal.fire({
      title: '¡Éxito!',
      text: message,
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
  },

  showErrorMessage: ( message = "Error") => {
    return MySwal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
  },
};

export default Alerts;
