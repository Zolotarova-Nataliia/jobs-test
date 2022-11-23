import JobsListItem from "../JobsListItem/JobsListItem";

export default function JobsList({ jobs }) {
  return (
    <ul>
      {jobs.map(({ id, name, createdAt, address, pictures, title }) => (
        <JobsListItem
          key={id}
          name={name}
          createdAt={createdAt}
          address={address}
          pictures={pictures}
          title={title}
        />
      ))}
    </ul>
  );
}
