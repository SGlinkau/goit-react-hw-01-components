import PropTypes from 'prop-types';
import css from './statisticStyles.module.css'
import { randomColor } from './colorRandomizer';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>

            <ul className={css.statisticsList}>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} className={css.statisticsListItem} style={{backgroundColor: randomColor()}}>
                        <span className={css.statisticsListLabel}>{label}</span>
                        <span className={css.statisticsListPercent}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};