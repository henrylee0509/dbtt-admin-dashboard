import { CircleCheckBig, Clock, Lightbulb, Target, TrendingUp, TriangleAlert } from "lucide-react";

const keyInsights = [
  {
    section: "Revenue Decline",
    headline: "Revenue declining",
    detail: "Q1 2026 revenue decreased by 34.6% YoY, from SGD 523K to SGD 342K.",
    priority: "High",
  },
  {
    section: "Quality Concerns",
    headline: "Product quality",
    detail:
      "2 products have critical quality issues, causing 21.7% return rate and SGD 120K revenue loss.",
    priority: "Critical",
  },
  {
    section: "Circular Economy",
    headline: "Opportunity",
    detail: "Repair and trade-in programs generate SGD 201K with 38.5% profit margin.",
    priority: "High",
  },
  {
    section: "Regional Challenges",
    headline: "Underperforming regions",
    detail: "West down 23.8% and North down 12.1% due to coverage gaps and competitor expansion.",
    priority: "High",
  },
  {
    section: "Product Quality Root Cause",
    headline: "Root cause",
    detail: "Bata School Shoes and Bubblegummers Kids account for major complaints.",
    priority: "Critical",
  },
  {
    section: "Market Competition",
    headline: "Root cause",
    detail: "Decathlon, Nike and Skechers expanded aggressively in Singapore.",
    priority: "High",
  },
  {
    section: "Distribution & Accessibility",
    headline: "Root cause",
    detail: "Limited store coverage and slow delivery reduce convenience.",
    priority: "Medium",
  },
  {
    section: "Pricing Strategy",
    headline: "Root cause",
    detail: "Some premium products are not delivering perceived value.",
    priority: "Medium",
  },
  {
    section: "Brand Perception",
    headline: "Root cause",
    detail: "Bata is seen as traditional or outdated among younger customers.",
    priority: "Medium",
  },
];

const actionPlan = [
  {
    section: "Action 0-3 Months",
    headline: "Immediate",
    detail:
      "Halt production of critical products, offer free repairs/replacements, launch quality guarantee.",
    priority: "Critical",
    icon: TriangleAlert,
  },
  {
    section: "Action 3-6 Months",
    headline: "Implementation",
    detail: "Open 2 West stores, improve delivery, launch Comfort Plus, target regional marketing.",
    priority: "High",
    icon: Target,
  },
  {
    section: "Action 6-12 Months",
    headline: "Transformation",
    detail:
      "Open repair centers, mobile repair fleet, AI quality prediction, customer analytics platform.",
    priority: "Strategic",
    icon: Lightbulb,
  },
];

function InsightsActions() {
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "Critical":
        return "bg-red-100 text-red-800 border-red-300";
      case "High":
        return "bg-orange-100 text-orange-800 border-orange-300";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Strategic":
        return "bg-purple-100 text-purple-800 border-purple-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "Critical":
        return <TriangleAlert className="w-5 h-5 text-red-600" />;
      case "High":
        return <TrendingUp className="w-5 h-5 text-orange-600" />;
      case "Medium":
        return <Lightbulb className="w-5 h-5 text-yellow-600" />;
      case "Strategic":
        return <Target className="w-5 h-5 text-purple-600" />;
      default:
        return <CircleCheckBig className="w-5 h-5 text-gray-600" />;
    }
  };
  const criticalInsights = keyInsights.filter((priority) => priority.priority === "Critical");
  const highInsights = keyInsights.filter((priority) => priority.priority === "High");
  const mediumInsights = keyInsights.filter((priority) => priority.priority === "Medium");
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div className="bg-gradient-to-r from-[#DC143C] to-red-600 rounded-lg shadow-lg p-8 text-white">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 p-4 rounded-lg">
            <Lightbulb className="w-10 h-10 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{"Strategic Insights & Action Plan"}</h2>
            <p className="text-red-50 mb-4">
              Comprehensive analysis of business challenges with prioritized action items
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-red-100 text-sm">Critical Issues</p>
                <p className="text-3xl font-bold mt-1">{criticalInsights.length}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-red-100 text-sm">High Priority</p>
                <p className="text-3xl font-bold mt-1">{highInsights.length}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-red-100 text-sm">Action Items</p>
                <p className="text-3xl font-bold mt-1">{actionPlan.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Insights</h2>
        {criticalInsights.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
              <TriangleAlert className="w-5 h-5" />
              Critical Priority
            </h3>
            <div className="space-y-3">
              {criticalInsights.map((priority, index) => (
                <div
                  key={index}
                  className="bg-red-50 border-l-4 border-red-600 rounded-lg p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      {getPriorityIcon(priority.priority)}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{priority.section}</h4>
                        <p className="text-gray-700">{priority.detail}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${getPriorityStyle(priority.priority)}`}
                    >
                      {priority.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {highInsights.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-orange-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              High Priority
            </h3>
            <div className="space-y-3">
              {highInsights.map((priority, index) => (
                <div
                  key={index}
                  className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      {getPriorityIcon(priority.priority)}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{priority.section}</h4>
                        <p className="text-gray-700">{priority.detail}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${getPriorityStyle(priority.priority)}`}
                    >
                      {priority.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {mediumInsights.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-yellow-900 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Medium Priority
            </h3>
            <div className="space-y-3">
              {mediumInsights.map((priority, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      {getPriorityIcon(priority.priority)}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{priority.section}</h4>
                        <p className="text-gray-700">{priority.detail}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${getPriorityStyle(priority.priority)}`}
                    >
                      {priority.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#DC143C] to-red-600">
          <h2 className="text-xl font-bold text-white">Prioritized Action Plan</h2>
          <p className="text-red-50 text-sm mt-1">Phased approach to address business challenges</p>
        </div>
        <div className="p-6 space-y-6">
          {actionPlan.map((priority, index) => {
            const Icon = priority.icon;
            return (
              <div
                key={index}
                className={`border-2 rounded-lg p-6 ${priority.priority === "Critical" ? "border-red-300 bg-red-50" : priority.priority === "High" ? "border-orange-300 bg-orange-50" : "border-purple-300 bg-purple-50"}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${priority.priority === "Critical" ? "bg-red-200" : priority.priority === "High" ? "bg-orange-200" : "bg-purple-200"}`}
                  >
                    <Icon
                      className={`w-8 h-8 ${priority.priority === "Critical" ? "text-red-700" : priority.priority === "High" ? "text-orange-700" : "text-purple-700"}`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{priority.section}</h3>
                        <p className="text-sm text-gray-600 font-medium mt-1">
                          {priority.headline}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full border ${getPriorityStyle(priority.priority)}`}
                      >
                        {priority.priority}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-3">{priority.detail}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 font-medium">
                        Timeline: {priority.section.replace("Action ", "")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6 border-l-4 border-green-500">
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <CircleCheckBig className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Executive Summary</h2>
            <div className="space-y-2 mt-4">
              <p className="text-gray-700">
                <span className="font-semibold">Immediate Focus:</span> Address critical quality
                issues with Bata School Shoes and Bubblegummers Kids to prevent further revenue loss
                and brand damage.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Growth Opportunity:</span>
                {
                  " Circular economy programs (repair & trade-in) show strong performance with 38.5% profit margin - expand these services."
                }
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Regional Strategy:</span> West region requires
                urgent attention with store expansion and improved delivery. Central region remains
                strong and should be leveraged as a model.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Long-term Vision:</span> Invest in AI quality
                prediction and customer analytics to prevent future issues and improve customer
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsightsActions;
