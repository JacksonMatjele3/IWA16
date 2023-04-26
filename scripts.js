// scripts.js

const MONTHS = [  'Jan',  'Feb',  'Mar',  'Apr',  'May',  'Jun',  'Jul',  'Aug',  'Sep',  'Oct',  'Nov',  'Dec',]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = (athlete) => {
  const { firstName, surname, id, races } = athlete;
  const [latestRace] = races.slice(-1);

  const latestRaceDate = new Date(latestRace.date);
  const latestRaceDateFormatted = `${latestRaceDate.getDate()} ${MONTHS[latestRaceDate.getMonth()]} ${latestRaceDate.getFullYear()}`;

  const latestRaceTime = latestRace.time.reduce((total, time) => total + time, 0);
  const latestRaceTimeFormatted = `${String(Math.floor(latestRaceTime / 60)).padStart(2, '0')}:${String(latestRaceTime % 60).padStart(2, '0')}`;

  const section = document.querySelector(`[data-athlete="${id}"]`);
  section.innerHTML = `
    <h2>Athlete: ${id}</h2>
    <dl>
      <dt>Full name</dt>
      <dd>${firstName} ${surname}</dd>
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
      <dt>Event Date (Latest)</dt>
      <dd>${latestRaceDateFormatted}</dd>
      <dt>Total Time (Latest)</dt>
      <dd>${latestRaceTimeFormatted}</dd>
    </dl>
  `;
};

createHtml(data.response.data.NM372);
createHtml(data.response.data.SV782);
