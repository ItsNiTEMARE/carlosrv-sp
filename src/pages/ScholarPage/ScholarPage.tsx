import React from 'react';
import { useHistory } from 'react-router-dom';
import gamer from 'assets/gamer.svg';
import ExitButton from 'components/ExitButton';
import TimeSlot from './components/TimeSlot';
import TimeArrow from './components/TimeArrow';
import './ScholarPage.css';

const ScholarPage = (): JSX.Element => {
  const history = useHistory();

  const exitPage = () => {
    history.goBack();
  };

  return (
    <div className="ScholarPage">
      <ExitButton onClick={() => exitPage()} />
      <h1 className="ScholarPage-title">Scholar</h1>
      <h3 className="ScholarPage-subtitle">Honors Student</h3>
      <TimeSlot image={gamer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae, tenetur impedit voluptas eligendi
        cumque quia corrupti, perspiciatis fuga deleniti ipsum error quam sit odit reiciendis nesciunt eveniet illum
        sapiente?
      </TimeSlot>
      <TimeArrow alignRight>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem fugit quisquam, doloremque accusantium
        accusamus ullam? Repellat, consequuntur debitis, ipsum nisi sed animi aspernatur quia deserunt corporis nostrum,
        atque nemo unde.
      </TimeArrow>
      <TimeSlot image={gamer} alignRight>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem placeat explicabo eaque perspiciatis iusto
        nostrum atque architecto? Sit voluptatibus, molestias blanditiis debitis veritatis repellat esse ipsum
        accusantium reiciendis mollitia voluptate?
      </TimeSlot>
      <TimeArrow>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit officiis similique, doloribus fugit aliquid
        tenetur. Eligendi earum accusantium nobis, ex illo iure ipsum a corporis, perferendis quo similique, possimus
        quam!
      </TimeArrow>
      <TimeSlot image={gamer}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo minus ullam cumque corporis qui exercitationem
        iusto, voluptate eos. Dolor iure obcaecati quis distinctio at quas, fugit quisquam. Consequatur, voluptatibus
        ab.
      </TimeSlot>
    </div>
  );
};

export default ScholarPage;
