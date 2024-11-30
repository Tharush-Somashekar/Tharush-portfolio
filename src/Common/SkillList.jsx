function SkillList({ src, skill }) {
    return (
      <span>
        <svg height="10" width="10">
            <circle src={src} />
        </svg>
        <br />
        <br />
        <p>{skill}</p>
      </span>
    );
  }
  
  export default SkillList;