import css from './Section.module.css'

const Section = ({title, children}) => (
  <>
    <p className={css.title}>{title}</p>
    {children}
  </>
);

export { Section };