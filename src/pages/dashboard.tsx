import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Dashboard() {
  const auth = useContext(AuthContext);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">
              Welcome to Your Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-lg">
                Hello,{" "}
                <span className="font-semibold">
                  {auth?.user?.first_name} {auth?.user?.last_name}
                </span>
                !
              </p>
              <p>Email: {auth?.user?.email}</p>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-semibold mb-2">
                  Your Account Details
                </h2>
                <p>First Name: {auth?.user?.first_name}</p>
                <p>Last Name: {auth?.user?.last_name}</p>
              </div>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-semibold mb-2">Actions</h2>
                <Button onClick={auth?.logout} variant="destructive">
                  Logout
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
