import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface NewsletterFormData {
  email: string;
  localSales: boolean;
  exportOpportunities: boolean;
  investmentNews: boolean;
}

export default function Newsletter() {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: "",
    localSales: false,
    exportOpportunities: false,
    investmentNews: false,
  });
  
  const { toast } = useToast();

  const subscribeNewsletterMutation = useMutation({
    mutationFn: async (data: NewsletterFormData) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message || "Successfully subscribed to newsletter!",
      });
      setFormData({
        email: "",
        localSales: false,
        exportOpportunities: false,
        investmentNews: false,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe to newsletter",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    subscribeNewsletterMutation.mutate(formData);
  };

  const handleCheckboxChange = (field: keyof NewsletterFormData, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked,
    }));
  };

  return (
    <section id="newsletter" className="py-20 bg-terra-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get Fresh Updates from the Field
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Stay connected with the latest news, product updates, and sustainable
          farming insights from TerraField Farms.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-4 focus:ring-green-300 focus:outline-none"
              required
            />
            <Button
              type="submit"
              disabled={subscribeNewsletterMutation.isPending}
              className="bg-terra-gold hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              {subscribeNewsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>

          {/* Optional Interest Checkboxes */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <label className="flex items-center text-green-100 space-x-2">
              <Checkbox
                checked={formData.localSales}
                onCheckedChange={(checked) => handleCheckboxChange("localSales", !!checked)}
                className="border-green-100"
              />
              <span>Local Sales Updates</span>
            </label>
            <label className="flex items-center text-green-100 space-x-2">
              <Checkbox
                checked={formData.exportOpportunities}
                onCheckedChange={(checked) => handleCheckboxChange("exportOpportunities", !!checked)}
                className="border-green-100"
              />
              <span>Export Opportunities</span>
            </label>
            <label className="flex items-center text-green-100 space-x-2">
              <Checkbox
                checked={formData.investmentNews}
                onCheckedChange={(checked) => handleCheckboxChange("investmentNews", !!checked)}
                className="border-green-100"
              />
              <span>Investment News</span>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}
