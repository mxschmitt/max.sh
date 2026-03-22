export default {
  async fetch(request, env) {
    const userAgent = request.headers.get('User-Agent') || '';

    if (userAgent.startsWith('curl/')) {
      const reset  = '\x1b[0m';
      const bold   = '\x1b[1m';
      const blue   = '\x1b[34m';
      const gray   = '\x1b[90m';
      const green  = '\x1b[32m';

      const lines = [
        `${bold}Max Schmitt${reset}`,
        `${gray}Member of Technical Staff · Amazon AGI | Previously Microsoft Playwright${reset}`,
        `${gray}San Francisco, CA  37.7910° N, 122.4034° W${reset}`,
        '',
        `${green}GitHub${reset}    https://github.com/mxschmitt`,
        `${green}LinkedIn${reset}  https://linkedin.com/in/max-schmitt`,
        `${green}Twitter${reset}   https://x.com/mx_schmitt`,
        `${green}Email${reset}     max@schmitt.mx`,
        '',
        `${blue}Building AI agents for browser use @ Amazon Nova Act${reset}`,
        `${blue}Previously 5 years core contributor to Microsoft Playwright${reset}`,
        '',
        reset, // ensure terminal colors are fully reset before the prompt returns
      ];

      return new Response(lines.join('\n'), {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
