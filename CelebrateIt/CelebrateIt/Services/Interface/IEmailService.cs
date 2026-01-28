using CelebrateIt.Model;

namespace CelebrateIt.Services.Interface
{
    public interface IEmailService
    {
        void SendEmail(MailRequest mailRequest);
    }
}
