import styles from './DetailsComponent.module.css'

export default function DetailsComponent({ details }) {
  const formatDetails = (details) => {
    const spans = [];

    for (const [key, value] of Object.entries(details)) {
      let text;

      if (value === 1) {
        text = key.charAt(0).toUpperCase() + key.slice(1);
      } else if (typeof value === "number") {
        text = `${value} ${key}`;
      } else {
        text = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
      }

      spans.push(
        <span key={key} className={styles.span}>
          {text}
        </span>
      );
    }

    return spans;
  };

  return <div className={styles.detailsContainer}>{formatDetails(details)}</div>;
}
