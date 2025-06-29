import SectionTitle from "@/components/atoms/title/SectionTitle";
import NotificationNotFount from "@/components/Error&NotFound/NotificationNotFount";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: "inspection",
      title: "طلب فحص",
      content: "يوجد طلب فحص قريب من موقعك",
      date: "30 سبتمبر 2025",
      time: "12:57 ص",
      avatar: "A",
      isNew: true,
      hasGreenDot: true,
    },
    {
      id: 2,
      type: "auction",
      title: "مزادات",
      content:
        "تهانينا، لقد ربحت المزاد بنجاح تواصل معنا لترتيب التسليم والدفع",
      date: "30 سبتمبر 2025",
      time: "12:57 ص",
      avatar: "/placeholder.svg?height=40&width=40",
      isNew: false,
      hasGreenDot: false,
    },
    {
      id: 3,
      type: "auction",
      title: "مزادات",
      content:
        "تهانينا، لقد ربحت المزاد بنجاح تواصل معنا لترتيب التسليم والدفع",
      date: "30 سبتمبر 2025",
      time: "12:57 ص",
      avatar: "/placeholder.svg?height=40&width=40",
      isNew: false,
      hasGreenDot: false,
    },
    {
      id: 4,
      type: "auction",
      title: "مزادات",
      content:
        "تهانينا، لقد ربحت المزاد بنجاح تواصل معنا لترتيب التسليم والدفع",
      date: "30 سبتمبر 2025",
      time: "12:57 ص",
      avatar: "/placeholder.svg?height=40&width=40",
      isNew: false,
      hasGreenDot: false,
    },
  ];

  return (
    <main className="Container pt-28 mb-16 space-y-6">
      {/* Header */}
      <SectionTitle Title="الإشعارات" />

      {/* Notifications List */}
      {notifications && notifications.length > 0 ? (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-start gap-4 p-4 rounded-lg ${
                notification.isNew ? "bg-gray-100" : "bg-white"
              } border border-gray-200`}
            >
              {/* Avatar Section */}
              <div className="relative flex-shrink-0">
                <Avatar className="h-12 w-12">
                  {notification.type === "inspection" ? (
                    <AvatarFallback className="bg-green-600 text-white font-semibold">
                      {notification.avatar}
                    </AvatarFallback>
                  ) : (
                    <AvatarImage
                      src={notification.avatar || "/placeholder.svg"}
                      alt="Profile"
                    />
                  )}
                </Avatar>
                {notification.hasGreenDot && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>

              {/* Content Section */}
              <div className="flex-1 text-right">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-sm text-gray-500">
                    {notification.time}
                  </div>
                  <div className="font-semibold text-gray-900">
                    {notification.title}
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  {notification.content}
                </p>

                <div className="text-xs text-gray-500">{notification.date}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NotificationNotFount />
      )}
    </main>
  );
};

export default NotificationsPage;
