import useGetUserInfo from "../hooks/useGetUserInfo";

export default function CardProfile() {
  const { data, isSuccess, isLoading } = useGetUserInfo();

  if (isSuccess) {
    return (
      <p>
        {data.name} - {data.family_name}
      </p>
    );
  }

  return <p>Cargando</p>;
}
