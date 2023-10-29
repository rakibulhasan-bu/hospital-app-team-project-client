import BranchesCard from "../../components/Banches/BranchesCard";
import allBranches from "../../components/data/branches.json";
import SectionHeading from "../../components/sharedTitle/SectionHeading";

const Branches = () => {
  console.log(allBranches);
  return (
    <>
      <SectionHeading title="Our Branches" />
      <div className="grid grid-cols-1 gap-4 my-10 md:grid-cols-2 lg:grid-cols-4 min-w-max">
        {allBranches.map((branch) => (
          <BranchesCard
            key={branch.name}
            name={branch.name}
            location={branch.location}
            contact={branch.contact}
            email={branch.email}
          />
        ))}
      </div>
    </>
  );
};

export default Branches;
