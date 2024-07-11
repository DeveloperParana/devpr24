import { GoogleFormDialog } from "../components";
import { contributes } from "../../data";

export const GetInvolved = () => {
  const openGoogleFormDialog = (src: string) => {
    document.body.append(<GoogleFormDialog src={src} />);
  };

  const today = new Date()

  const isEnded = (date: Date) => {
    return date && date < today
  }

  const getDateText = (date: Date) => {
    if (!isEnded(date)) {
      return 'Aberto até ' + date?.toLocaleDateString()
    }

    return 'Encerrado'
  }

  return (
    <section className="get-involved" id="contribua">
      <div className="title">
        <h2 className="titleText">Contribua</h2>
      </div>
      <div className="content">
        {contributes.map((contribute) => {
          return (
            <div className="box">
              <div className="text">
                <h3>{contribute.title}</h3>
                <em className="text-error">
                  {getDateText(contribute.date)}
                </em>
                <p>{contribute.description}</p>

                <button
                  className="btn"
                  disabled={isEnded(contribute.date)}
                  onClick={() => openGoogleFormDialog(contribute.action.href)}
                >
                  {contribute.action.text}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
