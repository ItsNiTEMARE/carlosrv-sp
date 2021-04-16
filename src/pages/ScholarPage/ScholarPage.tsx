import React from 'react';
import { useHistory } from 'react-router-dom';
import school from 'assets/school.svg';
import failed from 'assets/failed.svg';
import textbooks from 'assets/textbooks.svg';
import highschool from 'assets/highschool.svg';
import college from 'assets/college.svg';
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
      <TimeSlot title="Kindergarden" image={school}>
        As I begin my journy in school, I focus on being able to communicate with my classmates over my grades. This is
        due to my limited knowledge of English coming from a Spanish-speaking household. Learning is a bit difficult
        with the language barrier.
      </TimeSlot>
      <TimeArrow alignRight>
        Over the months, I begin learning English quickly. I am able to communicate much better with my classmates, and
        I am able to comprehend the material the teacher goes over. My grades are still not a priority for me.
      </TimeArrow>
      <TimeSlot title="2nd Grade" image={failed} alignRight>
        The school material begins to get much harder. Multiplication is a big topic in my current grade. My teacher
        starts giving out weekly multiplication quizzes. I do not perform well on most of them, and I hide the grades
        from my parents. I completely fail one of the quizzes. My mom finds out!
      </TimeSlot>
      <TimeArrow>
        My mom begins to demand good grades from my part, and she helps me to achieve those goals. I start to study for
        quizzes and tests. I begin to see positive grades in return.
      </TimeArrow>
      <TimeSlot title="Middle School" image={textbooks}>
        By now, I realize that my sole purpose is to be a great student, not only for my parents, but for myself to
        increase my chances of success in life. I begin to identify as a straight-A honors student. I set myself a goal
        to achieve all A&apos;s in my first year of middle school to prove this new identity.
      </TimeSlot>
      <TimeArrow alignRight>
        Earning all A&apos;s in my first year of middle school proved to be simple enough. I work my way through the
        rest of middle school with the goal of achieving all A&apos;s in each and every 9-weeks term.
      </TimeArrow>
      <TimeSlot title="High School" image={highschool} alignRight>
        Now that grades and GPA truly matter, I set the same standards from middle school and give myself the goal of
        maintaining a 4.0 GPA. I begin to doubt my ability at first, but I decide to stay consistent and continue to put
        in the hard work. I know it will pay off in the future.
      </TimeSlot>
      <TimeArrow>
        My friends and family realize my honors student indentity. I find it my responsibility to maintain this role,
        and I continue pushing for my academic goal. I finish high school with a GPA over 4.0.
      </TimeArrow>
      <TimeSlot title="College" image={college}>
        I begin college as a first-generation college student. I jump into UAB with my long-lived honors student
        identity. I join UAB&apos;s Honors College further pushing this ongoing scholar role. I continue to hold this
        identity, knowing it will end soon when I graduate.
      </TimeSlot>
    </div>
  );
};

export default ScholarPage;
