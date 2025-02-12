import loginAction from '@/actions/auth/login';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

type Props = React.ComponentPropsWithoutRef<'div'>;

export function LoginForm({ className, ...props }: Props) {
  const t = useTranslations('Login');

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </CardHeader>

        <CardContent>
          <form action={loginAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">{t('email.label')}</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={t('email.placeholder')}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t('password.label')}</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    {t('buttons.forgot')}
                  </a>
                </div>

                <Input id="password" type="password" name="password" required />
              </div>

              <Button type="submit" className="w-full">
                {t('buttons.login')}
              </Button>
              <Button variant="outline" className="w-full">
                {t('buttons.google')}
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              {t('buttons.noAccount')}{' '}
              <a href="#" className="underline underline-offset-4">
                {t('buttons.signup')}
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
