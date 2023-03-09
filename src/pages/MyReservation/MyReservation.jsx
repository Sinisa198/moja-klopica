import HeaderWithLogin from '../../components/Header/HeaderWithLogin';
import WeekButtons from '../../components/WeekButtons/WeekButtons';

const MyReservation = () => {
  return (
    <div className='my-reservation-wrapper'>
      <div className='header-reservation'>
        <HeaderWithLogin />
      </div>
      <div className='text-and-buttons-myreservation'>
        <p className='myreservation-text'>Moje rezervacije</p>
        <p className='text-cancel-reservation'>
          Rezervacije se mogu otkazati do ponoci
        </p>
        <WeekButtons />
      </div>
    </div>
  );
};

export default MyReservation;
