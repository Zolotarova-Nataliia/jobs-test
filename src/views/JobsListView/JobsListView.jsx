import JobsList from "../../components/JobsList/JobsList";
import { Container } from "./JobsListView.styled";

export default function JobsListView({ jobs }) {
  return (
    <main>
      <Container>
        <JobsList jobs={jobs} />
      </Container>
    </main>
  );
}
