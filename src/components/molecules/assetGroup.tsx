type AssetGroupProps = {
  paths: string[];
};

const AssetGroup = ({ paths }: AssetGroupProps) => {
  return (
    <div className="flex flex-row justify-between w-full gap-8">
      {paths.map((path) => (
        <div className="rounded-lg overflow-hidden">
          {/* add alt text */}
          <img src={path} />
        </div>
      ))}
    </div>
  );
};

export default AssetGroup;
