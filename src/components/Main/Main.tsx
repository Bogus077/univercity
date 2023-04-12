import React from 'react';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Туристический клуб "Высота"</div>
      <div className={styles.content}>
        <img src='/map1_1.jpg' alt='team' />

        <div className={styles.item}>
          <div className={styles.info}>
            Добро пожаловать в турклуб "Высота" - команду молодых и энергичных
            людей, которые стремятся к приключениям и новым открытиям!
          </div>
          <div className={styles.info}>
            Мы проводим разнообразные мероприятия, включая походы, экскурсии,
            спортивные соревнования и другие виды активного отдыха. Наша команда
            состоит из опытных инструкторов и педагогов, которые помогут
            подросткам освоиться в новой среде и почувствовать себя уверенно в
            любой ситуации.
          </div>
          <div className={styles.info}>
            Наша цель - помочь подросткам раскрыть свой потенциал и научиться
            работать в команде. Мы стремимся создать дружественную атмосферу,
            где каждый член команды чувствует себя принятым и уважаемым. Мы
            также стараемся поддерживать экологически чистое окружение, и наши
            мероприятия всегда проводятся с соблюдением правил безопасности и
            экологических норм. Мы гордимся нашей работой и стремимся создать
            незабываемые впечатления для наших участников. Присоединяйтесь к нам
            и окунитесь в мир приключений и новых открытий. С нами вы сможете
            почувствовать настоящую свободу и насладиться красотами природы.
          </div>
        </div>
      </div>
    </div>
  );
};
