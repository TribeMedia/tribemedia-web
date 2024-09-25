'use client';

import React from 'react';
import PasswordResetForm from "@/components/password-reset-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { NextPage } from 'next';

const ForgotPasswordPage: NextPage = () => {
  return (

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Reset Your Password</CardTitle>
        </CardHeader>
        <CardContent>
          <PasswordResetForm token={''} />
        </CardContent>
      </Card>

  );
};

export default ForgotPasswordPage;