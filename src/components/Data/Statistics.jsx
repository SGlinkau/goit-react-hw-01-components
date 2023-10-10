import PropTypes from 'prop-types';
import { randomColor } from './colorRandomizer';

export const Statistics = ({ title, stats }) => {
    return (
        <section class="statistics">
            <h2 class="title">Upload stats</h2>

            <ul class="stat-list">
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} className='item'>
                        <span>{label}</span>
                        <span>{percentage}%</span>
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