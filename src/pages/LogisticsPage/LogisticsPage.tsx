import PageHeader from "@/widgets/general/PageHeader/PageHeader";
import "./LogisticsPage.scss";
import logistics from "./assets/logistics.jpg";
import Image from "next/image";
import experience from "../../shared/icons/experience-icon.svg";
import team from "../../shared/icons/team.svg";
import partner from "../../shared/icons/handshake-icon.svg";

const LogisticsPage = () => {
  const benefits = [
    {
      id: 1,
      title: "Большой опыт",
      description:
        "Мы имеем многолетний успешный опыт в автомобильной логистике, работая с клиентами из разных стран и культур. Наша история успеха подтверждает нашу компетентность и способность решать самые сложные задачи.",
      icon: experience,
    },
    {
      id: 2,
      title: "Профессиональная команда",
      description:
        "Наша команда состоит из высококвалифицированных специалистов в области логистики и транспортировки. Каждый сотрудник обладает глубоким пониманием индустрии и готов предоставить вам экспертное руководство на каждом этапе сотрудничества.",
      icon: team,
    },
    {
      id: 3,
      title: "Надежные партнеры",
      description:
        "Мы тесно сотрудничаем с надежными партнерами и поставщиками в Южной Корее и Китае. Наши партнерские отношения обеспечивают нам доступ к лучшим ресурсам и услугам, что позволяет нам гарантировать качество и надежность нашим клиентам.",
      icon: partner,
    },
  ];
  return (
    <div className="logistics-page">
      <PageHeader
        background={logistics}
        title="Asia Road Logistic"
        description="Ваша надежная логистическая компания"
      />
      <div className="logistics-page__container">
        <p className="logistics-page__description">
          <span>Asia Road Logistic</span> - это ведущая логистическая
          компания, специализирующаяся на транспортировке и выкупе
          автомобилей из Южной Кореи и Китая. Мы предоставляем
          инновационные решения в сфере автомобильной логистики,
          обеспечивая клиентов надежными и профессиональными услугами.
          С нашим богатым опытом и экспертизой, мы гарантируем
          безопасную и эффективную доставку автомобилей, сохраняя их
          интегритет на протяжении всего процесса.
        </p>

        <div className="logistics-page__benefits">
          {benefits.map((benefit) => (
            <div className="logistics-page__item">
              <div className="logistics-page__header">
                <div className="logistics-page__icon">
                  <Image
                    src={benefit.icon}
                    alt="Benefit Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h4>{benefit.title}</h4>
              </div>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogisticsPage;
